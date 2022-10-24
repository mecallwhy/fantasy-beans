export const inRange = (numberToCheck, min, max) => {
    return numberToCheck >= min && numberToCheck <= max;
}
export const checkPositionLimit = ( player, playersToCheck, positionLimits) => {
    let playersOfSamePosition = playersToCheck.filter(singlePlayer => {
            return singlePlayer.playerData.position === player.position;
    });
    for (const positionLimit of positionLimits){
        if (player.position === positionLimit.position){
          if (playersOfSamePosition.length >= positionLimit.limit)
            return false;
          else
            return true;
        }
    }
}
export const findFirstFreeRole = (roles, player, hiredPlayers ) => {
    let rolesForSamePosition = roles.find(role=>role.position === player.position).rolesList;
    let firstFreeRole;
    let hiredPlayersOfSamePosition = hiredPlayers.filter(singlePlayer => singlePlayer.playerData.position === player.position)
    if (hiredPlayersOfSamePosition.length === 0)
      firstFreeRole = rolesForSamePosition[0]
    else{
      let takenRoles = hiredPlayersOfSamePosition.map((player) => player.role)
      firstFreeRole = rolesForSamePosition
        .filter(role => !takenRoles.includes(role))
        .sort((p1, p2) => p1 <= p2)
        .at(0);
    }
    return firstFreeRole;
}
export const playersWithinLimits = (allPlayers, theSquad, budget, playersPerClubLimit, positionLimits) => {
    let result = allPlayers.filter(player => {
      return  theSquad.filter(singlePlayer => singlePlayer.playerData.club === player.club).length < playersPerClubLimit &&
              !theSquad.map(singlePlayer => singlePlayer.playerData.id).includes(player.id) &&
              checkPositionLimit(player, theSquad, positionLimits) &&
              player.price <= budget
    })
    return result;
}
