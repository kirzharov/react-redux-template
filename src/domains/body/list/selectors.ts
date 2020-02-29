import { createSelector } from "reselect";

function getList(state: RootStore): ListElement[] {
  return state.getIn(["list"]).map(({ name, ...rest }: ListElement) => ({
    ...rest,
    name: name.toLocaleUpperCase()
  }));
}

function countComments(state: RootStore): number {
  return state
    .getIn(["list"])
    .filter(({ comment }: ListElement) => comment.length > 3).length;
}
function countNames(state: RootStore): number {
  return state
    .getIn(["list"])
    .filter(({ name }: ListElement) => name.length > 3).length;
}

export const listSelector = createSelector(
  getList,
  countComments,
  countNames,
  (list, count, nameCount) => ({
    list,
    count,
    moreThanThree: count + nameCount
  })
);
