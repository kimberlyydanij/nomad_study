type Age = number;
type Name = string;
type Player = {
    name : Name,
    age ?: Age
}

function playerMaker(name: string) : Player {
    return {
        name
    }
}

function playerMaker2 (name: string) : Player => ({name})

const apple = playerMaker("apple")
apple.age = 42