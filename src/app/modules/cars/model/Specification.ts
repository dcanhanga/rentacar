import { randomUUID } from 'crypto';
class Specification {
  name!: string;
  description!: string;
  id?: string;
  created_at!: Date;
  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}

export { Specification };
