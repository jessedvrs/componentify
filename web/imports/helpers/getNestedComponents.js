'use strict';

import { filter } from 'mout/array';

export default function(components) {

    // Make a copy of the original array
    components = components.slice();

    // Initiate tree with roots (unnested componets)
    let tree = filter(components, c => !c.nested_in);

    const nestComponents = (layerComponents) => {
        layerComponents.forEach((component) => {

            // Find components with matching 'nested_in'-field,
            // assign them to component.components
            // and remove them from original components array
            component.components = components.filter((c, index) => {
                if (c.nested_in === component._id) {
                    components.splice(index, 1);
                    return true;
                }
            });

            // Continue recursive nesting
            nestComponents(component.components);
        });
    };

    // Start recursive nesting
    nestComponents(tree);

    return tree;
};
