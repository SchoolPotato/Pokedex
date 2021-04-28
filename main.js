// I hate this but since I'm not using node I guess I just gotta slap the json in here

let charizard = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,
    "stats": [
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 84,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 109,
        "effort": 3,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "flying"
        }
      }
    ],
    "weight": 905
  }`

let charmeleon = `{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 142,
  "height": 11,
  "id": 5,
  "is_default": true,
  "name": "charmeleon",
  "order": 6,
  "stats": [
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 64,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    }
  ],
  "weight": 190
}`

let charmander = `{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 62,
  "height": 6,
  "id": 4,
  "is_default": true,
  "name": "charmander",
  "order": 5,
  "stats": [
    {
      "base_stat": 39,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 52,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 43,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 60,
      "effort": 0,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 50,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    }
  ],
  "weight": 85
}`

charmander = JSON.parse(charmander);
charmeleon = JSON.parse(charmeleon);
charizard = JSON.parse(charizard);

function writePokedex(pokemon){
  $('.pokedex').append(`<img src="images/${pokemon.name}.png">`);

  $('.info').append(`<p class="stats1">Name: ${pokemon.name}<br>Base XP: ${pokemon.base_experience}<br>Height: ${pokemon.height}<br>Weight: ${pokemon.weight}</p>`);

  for(i = 0; i < pokemon.stats.length; i++){
    $('.info').append(`<p class ="stats2">${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}</p>`);
  }

  let types = "Types: ";

  for(i = 0; i < pokemon.types.length; i++){
    if(i != pokemon.types.length-1){
      types += pokemon.types[i].type.name + ", ";
    } else {
      types += pokemon.types[i].type.name;
    }
  }

  $('.info').append(`<p class="types">${types}</p>`);

  $('.info').append(`<p class="ablities">Abilities: ${pokemon.abilities[0].name}, ${pokemon.abilities[1].name}</p>`);
}