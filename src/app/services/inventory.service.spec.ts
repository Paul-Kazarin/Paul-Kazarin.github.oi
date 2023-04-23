import {InventoryService} from "./inventory.service";

describe('InventoryService', () => {
  let service: InventoryService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj(['get', 'post', 'delete'])
    service = new InventoryService(mockHttp);
  })

  // it('should have no inventory to start', () => {
  //   expect(service.getItems.length).toBe(0);
  // })
  //
  // it('should get response when getItems is called', () => {
  //   service.getItems();
  //
  //   expect(service.getItems.length).not.toBeNull()
  // })

  }
)
