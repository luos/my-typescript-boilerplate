///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../../typings/jasmine/jasmine.d.ts"/>

import {Test} from "../app/Test";


it("should blabla", () => {
   var t = new Test.Test();
    expect(t.hello()).toBe(1);
    expect(1 ).toBe(1);
});
