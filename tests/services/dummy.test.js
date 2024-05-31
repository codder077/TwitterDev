import * as dummyFunctions from '../../src/services/dummy-service.js'

test('result is true and return learning js', ()=>{
    const spy = jest.spyOn(dummyFunctions,'helper').mockImplementation(()=>{
        return true;
    })
    const result = dummyFunctions.execute();
    expect(result).toBe('hi');
})