import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  // value that should get transformed is passed along with an optional list of arguments
  transform(value: any, limit: number) {
    // return first 10 chars of string
    if (value.length > limit) {
      return value.substr(0, limit) + " ...";
    }
    return value;
  }
}
