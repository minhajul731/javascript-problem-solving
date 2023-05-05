const friends = ['abdullah', 'habib', 'emon', 'saddad', 'nasir', 'fahmid', 'imran'];

function perfectFriend(friends) {
    for (const friend of friends) {
        if (friend.length == 5) {
            return friend;
        }
    }
}

const friendName = perfectFriend(friends);
console.log(friendName);
