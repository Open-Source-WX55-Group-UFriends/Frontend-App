export class Farm {
  id: string;
  farm_name: string;
  location: string;
  type: string;
  infrastructure: string;
  services: string;
  status: string;
  description: string;


  constructor() {
    this.id = '';
    this.farm_name = '';
    this.location = '';
    this.type = '';
    this.infrastructure= '';
    this.services = '';
    this.status = '';
    this.description = '';
  }
}
