import type { Schema, Struct } from '@strapi/strapi';

export interface OrderedItemOrderedItem extends Struct.ComponentSchema {
  collectionName: 'components_ordered_item_ordered_items';
  info: {
    displayName: 'Ordered-item';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ordered-item.ordered-item': OrderedItemOrderedItem;
    }
  }
}
