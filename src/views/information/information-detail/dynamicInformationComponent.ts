import { shallowRef, Ref } from 'vue';

/**
 * Dynamically imports a Vue component based on its name and returns a reactive reference to its HTML element.
 *
 * @param {string} componentName - The name of the component to be dynamically imported.
 * @returns {Ref<HTMLElement | undefined>} - A shallow reactive reference to the HTML element of the dynamically imported component.
 */
export default function importDynamicComponentByComponentName(componentName: string): Ref<HTMLElement | undefined> {
  const dynamicComponent: Ref<HTMLElement | undefined> = shallowRef();

  import(`./components/${componentName}-component.vue`).then((component) => {
    dynamicComponent.value = component.default;
  });

  return dynamicComponent;
}
