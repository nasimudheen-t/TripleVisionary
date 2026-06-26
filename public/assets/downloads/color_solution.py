bl_info = {
    "name": "Color Solution",
    "author": "Triple Visionary",
    "description": "Add professional color grading node groups (De Blue, De Warm, Fog Fixer) to your compositor",
    "blender": (3, 0, 0),
    "version": (1, 0, 0),
    "location": "Node Editor > Toolbar > Color Solution",
    "category": "Compositing",
    "doc_url": "https://triplevisionary.com",
}

import bpy
from bpy.types import Panel, Operator, PropertyGroup
from bpy.props import BoolProperty, PointerProperty


def add_curve_points(curve, points):
    existing = len(curve.points)
    for i in range(points - existing):
        curve.points.new(0.0, 0.0)


def _clear_group(ng):
    for node in ng.nodes:
        ng.nodes.remove(node)
    while ng.inputs:
        ng.inputs.remove(ng.inputs[0])
    while ng.outputs:
        ng.outputs.remove(ng.outputs[0])


def build_de_blue_group():
    if "de blue" in bpy.data.node_groups:
        ng = bpy.data.node_groups["de blue"]
    else:
        ng = bpy.data.node_groups.new("de blue", "CompositorNodeTree")

    if ng.nodes:
        return ng
    _clear_group(ng)

    ng.inputs.new("NodeSocketColor", "Image")
    ng.inputs.new("NodeSocketFloat", "black").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "red").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "yellow").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "Bright").default_value = -0.0
    ng.inputs.new("NodeSocketFloat", "Contrast").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "white").default_value = 0.0
    ng.outputs.new("NodeSocketColor", "Image")

    input_node = ng.nodes.new("NodeGroupInput")
    input_node.location = (-1168.8, 643.6)
    input_node.width = 140.0

    curves001 = ng.nodes.new("CompositorNodeCurveRGB")
    curves001.name = "RGB Curves.001"
    curves001.location = (-791.2, 1293.8)
    curves001.width = 200.0
    m = curves001.mapping
    m.black_level = (0.0, 0.0, 0.0)
    m.white_level = (1.0, 1.0, 1.0)
    c = m.curves[3]
    add_curve_points(c, 4)
    c.points[0].location = (0.0, 0.0)
    c.points[1].location = (0.2777777, 0.45)
    c.points[2].location = (0.6388892, 0.74)
    c.points[3].location = (1.0, 1.0)

    curves = ng.nodes.new("CompositorNodeCurveRGB")
    curves.name = "RGB Curves"
    curves.location = (-377.4, 996.9)
    curves.width = 200.0
    m = curves.mapping
    m.black_level = (0.0, 0.0, 0.0)
    m.white_level = (1.0, 1.0, 1.0)
    c = m.curves[3]
    add_curve_points(c, 4)
    c.points[0].location = (0.0, 0.0)
    c.points[1].location = (0.2777777, 0.075)
    c.points[2].location = (0.6388892, 0.35)
    c.points[3].location = (1.0, 1.0)

    cb001 = ng.nodes.new("CompositorNodeColorBalance")
    cb001.name = "Color Balance.001"
    cb001.location = (172.3, 774.9)
    cb001.width = 400.0
    cb001.correction_method = "LIFT_GAMMA_GAIN"
    cb001.lift = (1.05, 0.971862, 0.971862)
    cb001.gamma = (1.0, 0.836123, 0.836123)
    cb001.gain = (1.194511, 1.126870, 1.126870)

    cb = ng.nodes.new("CompositorNodeColorBalance")
    cb.name = "Color Balance"
    cb.location = (384.0, 627.6)
    cb.width = 400.0
    cb.correction_method = "LIFT_GAMMA_GAIN"
    cb.lift = (1.098991, 1.1, 1.046773)
    cb.gamma = (1.0, 0.986446, 0.846235)
    cb.gain = (1.0, 1.0, 1.0)

    bc = ng.nodes.new("CompositorNodeBrightContrast")
    bc.name = "Bright/Contrast"
    bc.location = (741.8, 191.3)
    bc.width = 140.0
    bc.inputs["Bright"].default_value = -0.4
    bc.inputs["Contrast"].default_value = 0.1

    output_node = ng.nodes.new("NodeGroupOutput")
    output_node.location = (977.8, 101.6)
    output_node.width = 140.0

    links = [
        (cb001.outputs["Image"], cb.inputs["Image"]),
        (curves.outputs["Image"], cb001.inputs["Image"]),
        (input_node.outputs["black"], curves.inputs["Fac"]),
        (input_node.outputs["red"], cb001.inputs["Fac"]),
        (input_node.outputs["yellow"], cb.inputs["Fac"]),
        (input_node.outputs["Bright"], bc.inputs["Bright"]),
        (input_node.outputs["Contrast"], bc.inputs["Contrast"]),
        (input_node.outputs["Image"], curves001.inputs["Image"]),
        (curves001.outputs["Image"], curves.inputs["Image"]),
        (cb.outputs["Image"], bc.inputs["Image"]),
        (bc.outputs["Image"], output_node.inputs["Image"]),
        (input_node.outputs["white"], curves001.inputs["Fac"]),
    ]
    for src, dst in links:
        ng.links.new(src, dst)

    return ng


def build_de_warm_group():
    if "de warm" in bpy.data.node_groups:
        ng = bpy.data.node_groups["de warm"]
    else:
        ng = bpy.data.node_groups.new("de warm", "CompositorNodeTree")

    if ng.nodes:
        return ng
    _clear_group(ng)

    ng.inputs.new("NodeSocketColor", "Image")
    ng.inputs.new("NodeSocketFloat", "black").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "cyan").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "blue").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "Bright").default_value = -0.0
    ng.inputs.new("NodeSocketFloat", "Contrast").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "white").default_value = 0.0
    ng.outputs.new("NodeSocketColor", "Image")

    input_node = ng.nodes.new("NodeGroupInput")
    input_node.location = (-1168.8, 643.6)
    input_node.width = 140.0

    curves001 = ng.nodes.new("CompositorNodeCurveRGB")
    curves001.name = "RGB Curves.001"
    curves001.location = (-791.2, 1293.8)
    curves001.width = 200.0
    m = curves001.mapping
    m.black_level = (0.0, 0.0, 0.0)
    m.white_level = (1.0, 1.0, 1.0)
    c = m.curves[3]
    add_curve_points(c, 4)
    c.points[0].location = (0.0, 0.0)
    c.points[1].location = (0.2777777, 0.45)
    c.points[2].location = (0.6388892, 0.74)
    c.points[3].location = (1.0, 1.0)

    curves = ng.nodes.new("CompositorNodeCurveRGB")
    curves.name = "RGB Curves"
    curves.location = (-377.4, 996.9)
    curves.width = 200.0
    m = curves.mapping
    m.black_level = (0.0, 0.0, 0.0)
    m.white_level = (1.0, 1.0, 1.0)
    c = m.curves[3]
    add_curve_points(c, 4)
    c.points[0].location = (0.0, 0.0)
    c.points[1].location = (0.2777777, 0.075)
    c.points[2].location = (0.6388892, 0.35)
    c.points[3].location = (1.0, 1.0)

    cb001 = ng.nodes.new("CompositorNodeColorBalance")
    cb001.name = "Color Balance.001"
    cb001.location = (-137.7, 587.1)
    cb001.width = 400.0
    cb001.correction_method = "LIFT_GAMMA_GAIN"
    cb001.lift = (0.971862, 1.037011, 1.05)
    cb001.gamma = (0.836123, 0.919370, 1.0)
    cb001.gain = (1.126870, 1.185757, 1.194511)

    cb = ng.nodes.new("CompositorNodeColorBalance")
    cb.name = "Color Balance"
    cb.location = (269.5, 379.2)
    cb.width = 400.0
    cb.correction_method = "LIFT_GAMMA_GAIN"
    cb.lift = (1.046773, 1.050352, 1.1)
    cb.gamma = (0.846235, 0.858269, 1.0)
    cb.gain = (1.0, 1.0, 1.0)

    bc = ng.nodes.new("CompositorNodeBrightContrast")
    bc.name = "Bright/Contrast"
    bc.location = (741.8, 191.3)
    bc.width = 140.0
    bc.inputs["Bright"].default_value = -0.4
    bc.inputs["Contrast"].default_value = 0.1

    output_node = ng.nodes.new("NodeGroupOutput")
    output_node.location = (977.8, 101.6)
    output_node.width = 140.0

    links = [
        (cb001.outputs["Image"], cb.inputs["Image"]),
        (curves.outputs["Image"], cb001.inputs["Image"]),
        (input_node.outputs["black"], curves.inputs["Fac"]),
        (input_node.outputs["cyan"], cb001.inputs["Fac"]),
        (input_node.outputs["blue"], cb.inputs["Fac"]),
        (input_node.outputs["Bright"], bc.inputs["Bright"]),
        (input_node.outputs["Contrast"], bc.inputs["Contrast"]),
        (input_node.outputs["Image"], curves001.inputs["Image"]),
        (curves001.outputs["Image"], curves.inputs["Image"]),
        (cb.outputs["Image"], bc.inputs["Image"]),
        (bc.outputs["Image"], output_node.inputs["Image"]),
        (input_node.outputs["white"], curves001.inputs["Fac"]),
    ]
    for src, dst in links:
        ng.links.new(src, dst)

    return ng


def build_fog_fixer_group():
    if "fog fixer" in bpy.data.node_groups:
        ng = bpy.data.node_groups["fog fixer"]
    else:
        ng = bpy.data.node_groups.new("fog fixer", "CompositorNodeTree")

    if ng.nodes:
        return ng
    _clear_group(ng)

    ng.inputs.new("NodeSocketColor", "Image")
    ng.inputs.new("NodeSocketFloat", "contrast").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "power & slope").default_value = 0.0
    ng.inputs.new("NodeSocketFloat", "Saturation").default_value = 1.0
    ng.inputs.new("NodeSocketFloat", "Gamma").default_value = 1.0
    ng.inputs.new("NodeSocketFloat", "Exposure").default_value = 0.0
    ng.outputs.new("NodeSocketColor", "Image")

    input_node = ng.nodes.new("NodeGroupInput")
    input_node.location = (-849.5, -74.3)
    input_node.width = 140.0

    curves = ng.nodes.new("CompositorNodeCurveRGB")
    curves.location = (-658.7, 446.7)
    curves.width = 200.0
    m = curves.mapping
    m.black_level = (0.0, 0.0, 0.0)
    m.white_level = (1.0, 1.0, 1.0)
    c = m.curves[3]
    add_curve_points(c, 4)
    c.points[0].location = (0.0, 0.0)
    c.points[1].location = (0.6277781, 0.1875)
    c.points[2].location = (0.7888889, 0.43125)
    c.points[3].location = (1.0, 1.0)

    exposure = ng.nodes.new("CompositorNodeExposure")
    exposure.location = (-291.7, 368.2)
    exposure.width = 140.0
    exposure.inputs["Exposure"].default_value = 2.3

    cb = ng.nodes.new("CompositorNodeColorBalance")
    cb.location = (-68.2, 383.4)
    cb.width = 400.0
    cb.correction_method = "OFFSET_POWER_SLOPE"
    cb.offset = (0.0, 0.0, 0.0)
    cb.power = (1.48, 1.48, 1.48)
    cb.slope = (0.8, 0.8, 0.8)

    hsv = ng.nodes.new("CompositorNodeHueSat")
    hsv.location = (263.3, -10.3)
    hsv.width = 140.0
    hsv.inputs["Saturation"].default_value = 0.95

    gamma = ng.nodes.new("CompositorNodeGamma")
    gamma.location = (512.4, 123.4)
    gamma.width = 140.0
    gamma.inputs["Gamma"].default_value = 1.0

    output_node = ng.nodes.new("NodeGroupOutput")
    output_node.location = (913.6, 30.0)
    output_node.width = 140.0

    links = [
        (input_node.outputs["Image"], curves.inputs["Image"]),
        (input_node.outputs["contrast"], curves.inputs["Fac"]),
        (curves.outputs["Image"], exposure.inputs["Image"]),
        (input_node.outputs["Exposure"], exposure.inputs["Exposure"]),
        (exposure.outputs["Image"], cb.inputs["Image"]),
        (input_node.outputs["power & slope"], cb.inputs["Fac"]),
        (cb.outputs["Image"], hsv.inputs["Image"]),
        (input_node.outputs["Saturation"], hsv.inputs["Saturation"]),
        (hsv.outputs["Image"], gamma.inputs["Image"]),
        (input_node.outputs["Gamma"], gamma.inputs["Gamma"]),
        (gamma.outputs["Image"], output_node.inputs["Image"]),
    ]
    for src, dst in links:
        ng.links.new(src, dst)

    return ng


class CS_Props(PropertyGroup):
    use_de_blue: BoolProperty(
        name="De Blue",
        description="Remove blue color cast",
        default=True,
    )
    use_de_warm: BoolProperty(
        name="De Warm",
        description="Remove warm/warm tone",
        default=False,
    )
    use_fog_fixer: BoolProperty(
        name="Fog Fixer",
        description="Fix fog/haze",
        default=False,
    )


class NODE_OT_cs_add_selected(Operator):
    bl_idname = "node.cs_add_selected"
    bl_label = "Add Selected"
    bl_description = "Add selected color grading node groups to the compositor"
    bl_options = {"REGISTER", "UNDO"}

    @classmethod
    def poll(cls, context):
        return context.space_data and context.space_data.type == "NODE_EDITOR" and context.space_data.tree_type == "CompositorNodeTree"

    def execute(self, context):
        scene = context.scene
        props = scene.cs_props

        tree = context.space_data.edit_tree
        if not tree:
            self.report({"ERROR"}, "No compositor node tree open")
            return {"CANCELLED"}

        groups_to_add = []
        if props.use_de_blue:
            build_de_blue_group()
            groups_to_add.append(("de blue", (-300, 0)))
        if props.use_de_warm:
            build_de_warm_group()
            groups_to_add.append(("de warm", (-300, -200)))
        if props.use_fog_fixer:
            build_fog_fixer_group()
            groups_to_add.append(("fog fixer", (-300, -400)))

        if not groups_to_add:
            self.report({"WARNING"}, "No node groups selected")
            return {"CANCELLED"}

        for name, loc in groups_to_add:
            ng = bpy.data.node_groups[name]
            node = tree.nodes.new("CompositorNodeGroup")
            node.node_tree = ng
            node.location = loc
            node.width = 240.0

        self.report({"INFO"}, f"Added: {', '.join(g[0] for g in groups_to_add)}")
        return {"FINISHED"}


class NODE_OT_cs_add_single(Operator):
    bl_idname = "node.cs_add_single"
    bl_label = ""
    bl_description = "Add this node group to the compositor"
    bl_options = {"REGISTER", "UNDO"}

    group_name: bpy.props.StringProperty()

    @classmethod
    def poll(cls, context):
        return context.space_data and context.space_data.type == "NODE_EDITOR" and context.space_data.tree_type == "CompositorNodeTree"

    def execute(self, context):
        tree = context.space_data.edit_tree
        if not tree:
            self.report({"ERROR"}, "No compositor node tree open")
            return {"CANCELLED"}

        builders = {
            "de blue": build_de_blue_group,
            "de warm": build_de_warm_group,
            "fog fixer": build_fog_fixer_group,
        }

        if self.group_name not in builders:
            return {"CANCELLED"}

        builders[self.group_name]()
        ng = bpy.data.node_groups[self.group_name]
        node = tree.nodes.new("CompositorNodeGroup")
        node.node_tree = ng
        node.location = (-300, 0)
        node.width = 240.0

        self.report({"INFO"}, f"Added: {self.group_name}")
        return {"FINISHED"}


class NODE_PT_color_solution(Panel):
    bl_label = "Color Solution"
    bl_idname = "NODE_PT_color_solution"
    bl_space_type = "NODE_EDITOR"
    bl_region_type = "TOOLS"

    @classmethod
    def poll(cls, context):
        return context.space_data and context.space_data.tree_type == "CompositorNodeTree"

    def draw(self, context):
        layout = self.layout
        props = context.scene.cs_props

        box = layout.box()
        col = box.column(align=True)
        col.scale_y = 1.2
        col.prop(props, "use_de_blue", icon="COLOR", toggle=True)
        col.prop(props, "use_de_warm", icon="NODE", toggle=True)
        col.prop(props, "use_fog_fixer", icon="SHADERFX", toggle=True)

        layout.separator()

        row = layout.row(align=True)
        row.scale_y = 1.5
        row.operator("node.cs_add_selected", icon="NODETREE")

        layout.separator()
        layout.separator()

        box = layout.box()
        col = box.column(align=True)
        col.label(text="Quick Add", icon="ADD")
        op = col.operator("node.cs_add_single", text="De Blue", icon="COLOR")
        op.group_name = "de blue"
        op = col.operator("node.cs_add_single", text="De Warm", icon="NODE")
        op.group_name = "de warm"
        op = col.operator("node.cs_add_single", text="Fog Fixer", icon="SHADERFX")
        op.group_name = "fog fixer"

        layout.separator()
        layout.separator()

        row = layout.row()
        row.alignment = "CENTER"
        row.label(text="Created by Triple Visionary", icon="INFO")

        row = layout.row()
        row.alignment = "CENTER"
        op = row.operator("wm.url_open", text="triplevisionary.com", icon="URL")
        op.url = "https://triplevisionary.com"


classes = (
    CS_Props,
    NODE_OT_cs_add_selected,
    NODE_OT_cs_add_single,
    NODE_PT_color_solution,
)


def register():
    for cls in classes:
        bpy.utils.register_class(cls)
    bpy.types.Scene.cs_props = PointerProperty(type=CS_Props)


def unregister():
    for cls in reversed(classes):
        bpy.utils.unregister_class(cls)
    del bpy.types.Scene.cs_props


if __name__ == "__main__":
    register()
