import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false, // setting to false makes pipe recalculate and update any time the data (array/objs) changes
  // can lead to perf issues if you have a very long list
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === "") {
      // value is the array of servers
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
