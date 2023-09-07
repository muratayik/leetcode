import { findRestaurant } from "./minimum-index-sum-of-two-lists";

describe("minimum-index-sum-of-two-lists", () => {
  it("case 1", () => {
    const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
    const list2 = [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ];
    expect(findRestaurant(list1, list2)).toEqual(["Shogun"]);
  });

  it("case 2", () => {
    const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
    const list2 = ["KFC", "Shogun", "Burger King"];
    expect(findRestaurant(list1, list2)).toEqual(["Shogun"]);
  });

  it("case 3", () => {
    const list1 = ["happy", "sad", "good"];
    const list2 = ["sad", "happy", "good"];

    expect(findRestaurant(list1, list2)).toEqual(["sad", "happy"]);
  });
});
