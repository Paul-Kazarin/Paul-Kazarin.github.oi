import {AddNewModelComponent} from "./add-new-model.component";
import {Model} from "../../interfaces/model";
import {of} from "rxjs";

describe('AddNewModelComponent', () => {
  let component: AddNewModelComponent;
  let models: Model[];
  let mockInventoryService: any;
  let mockDialogRef;
  let mockData;

  beforeEach(() => {
    models = [
      {
        "id": 1,
        "model": "ar190"
      },
      {
        "id": 2,
        "model": "sr220"
      },
      {
        "id": 52,
        "model": "Switch"
      }
    ]

    mockDialogRef = jasmine.createSpyObj(['close'])
    mockData = jasmine.createSpyObj(['model', 'type'])
    mockInventoryService = jasmine.createSpyObj(['getModels', 'deleteModel', 'postAddNewModelForm'])

    component = new AddNewModelComponent(mockDialogRef, mockData, mockInventoryService);
  })

  describe('delete', () => {
    it('should delete the indicated model from the models list', () => {
      mockInventoryService.deleteModel.and.returnValue(of(true))
      component.models = models;

      component.delete(models[2]);

      expect(component.models.length).toBe(2);
    })

    it('should call deleteModel', () => {
      mockInventoryService.deleteModel.and.returnValue(of(true))
      component.models = models;

      component.delete(models[2]);

      expect(mockInventoryService.deleteModel).toHaveBeenCalledWith(models[2]);
    })
  });

});
