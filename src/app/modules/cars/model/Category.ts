import { randomUUID } from 'crypto';

class Category {
  name: string;
  description: string;
  id?: string;
  created_at: Date;
  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
export { Category };
