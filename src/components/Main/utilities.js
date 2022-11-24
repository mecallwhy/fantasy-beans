export const inRange = (numberToCheck, min, max) => {
  return numberToCheck >= min && numberToCheck <= max;
}
export const findFirstFreeRole = ( positions, player, hiredPlayers ) => {
  let rolesForSamePosition = [];
  if (player.position === "gk"){
    rolesForSamePosition = ["g1", "g2"];
  }
  else{
    for (const singlePosition in positions){
      if (positions[singlePosition].shortName === player.position){
          positions[singlePosition].pitchRolesList.forEach(role => 
            rolesForSamePosition.push(role.roleName)
          );
      }
    }
  }
  let firstFreeRole;
  const hiredPlayersOfSamePosition = hiredPlayers.filter(singlePlayer => singlePlayer.playerData.position === player.position)
  if (hiredPlayersOfSamePosition.length === 0){
    firstFreeRole = rolesForSamePosition[0];
  }
  else{
    const takenRoles = hiredPlayersOfSamePosition.map((player) => player.role)
    firstFreeRole = rolesForSamePosition
      .filter(role => !takenRoles.includes(role))
      .sort((p1, p2) => p1 <= p2)
      .at(0);
  }
  return firstFreeRole;
}
export const playersWithinLimits = (allPlayers, theSquad, budget, playersPerClubLimit, positions) => {
  const result = allPlayers.filter(player => {
    return  theSquad.filter(singlePlayer => singlePlayer.playerData.club === player.club).length < playersPerClubLimit &&
            !theSquad.map(singlePlayer => singlePlayer.playerData.id).includes(player.id) &&
            findFirstFreeRole(positions, player, theSquad) !== undefined &&
            player.price <= budget
  })
  return result;
}
