/* eslint-disable react-refresh/only-export-components */
import React, { forwardRef } from 'react';

const motionOnlyProps = new Set([
  'animate',
  'custom',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
  'exit',
  'initial',
  'layout',
  'layoutId',
  'transition',
  'variants',
  'viewport',
  'whileFocus',
  'whileHover',
  'whileInView',
  'whileTap',
]);

const createStaticComponent = (tag) =>
  forwardRef(function StaticMotionComponent(props, ref) {
    const staticProps = {};

    Object.entries(props).forEach(([key, value]) => {
      if (!motionOnlyProps.has(key)) {
        staticProps[key] = value;
      }
    });

    return React.createElement(tag, { ...staticProps, ref });
  });

const staticComponents = new Map();

export const motion = new Proxy(
  {},
  {
    get: (_, tag) => {
      if (!staticComponents.has(tag)) {
        staticComponents.set(tag, createStaticComponent(tag));
      }

      return staticComponents.get(tag);
    },
  },
);

export function AnimatePresence({ children }) {
  return children;
}

export function useInView() {
  return true;
}
