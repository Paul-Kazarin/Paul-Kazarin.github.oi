import {AddNewSubtypeComponent} from "./add-new-subtype.component";
import {SubTypes} from "../../interfaces/subTypes";
import {of} from "rxjs";

describe('AddNewSubtypeComponent', () => {
  let component: AddNewSubtypeComponent;
  let subTypes: SubTypes[];
  let mockInventoryService: any;
  let mockDialogRef;
  let mockData;

  beforeEach(() => {
    subTypes = [
      {
        "id": 1,
        "subType": "wake-surf"
      },
      {
        "id": 2,
        "subType": "jetboat"
      },
      {
        "id": 52,
        "subType": "pontoon"
      }
    ]

    mockDialogRef = jasmine.createSpyObj(['close'])
    mockData = jasmine.createSpyObj(['subType', 'type'])
    mockInventoryService = jasmine.createSpyObj(['getSubTypes', 'deleteSubType', 'postAddNewSubTypeForm'])

    component = new AddNewSubtypeComponent(mockDialogRef, mockData, mockInventoryService);
  })

  describe('delete', () => {
    it('should delete the indicated subType from the subTypes list', () => {
      mockInventoryService.deleteSubType.and.returnValue(of(true))
      component.subTypes = subTypes;

      component.delete(subTypes[2]);

      expect(component.subTypes.length).toBe(2);
    })

    it('should call deleteSubType', () => {
      mockInventoryService.deleteSubType.and.returnValue(of(true))
      component.subTypes = subTypes;

      component.delete(subTypes[2]);

      expect(mockInventoryService.deleteSubType).toHaveBeenCalledWith(subTypes[2]);
    })
  });

});
