export class Item {
  SKU!: string;
  name!: string;
  category!: string;
  quantity!: number;
  unitValue!: number;
  lowQuantity!: number;

  constructor(SKU: string,
    name: string,
    category: string,
    quantity: number,
    unitValue: number,
    lowQuantity: number
  ) {
    this.category = category;
    this.name = name;
    this.SKU = SKU;
    this.quantity = quantity;
    this.unitValue = unitValue;
    this.lowQuantity = lowQuantity;
  }


  getTotalValue(item: Item): number { return item.unitValue * item.quantity }

}
