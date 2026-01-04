export class Item {
  SKU!: string;
  name!: string;
  category!: string;
  quantity!: string;
  unitValue!: string;
  status!: "bom" | "pouco";
  lowQuantity!: number;

  constructor(SKU: string,
    name: string,
    category: string,
    quantity: string,
    unitValue: string,
    status: "bom" | "pouco",
    lowQuantity: number
  ) {
    this.category = category;
    this.name = name;
    this.SKU = SKU;
    this.quantity = quantity;
    this.status = status;
    this.unitValue = unitValue;
    this.lowQuantity = lowQuantity;
  }
}
