export const selectHouseInfo = (state, houseId) => {
  const house = state.houses.houses.find((h) => h.houseId === houseId);
  return house;
};
