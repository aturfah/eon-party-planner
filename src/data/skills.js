/*
Skill Flags for:
    Ailment: AILMENT_TARGET_TYPE
    Bind: BIND_TARGET_TYPE
    Buff: BUFF_TARGET_[STAT/Type]
    Non-Buff Boost: BOOST_TARGET_STAT
    Debuff: DEBUFF_TARGET_STAT
    Guard: GUARD_TARGET_TYPE
    Heals: HEAL_TARGET_[HP/Ailment/Binds/FLAGS]
*/

var skills = {
  "test": {
    "name": "test skill",
    "id": "test",
    "type": "novice",
    "lockdown": [
      "BIND_SINGLE_HEAD",
      "BIND_SINGLE_ARM",
      "BIND_SINGLE_LEG",
      "BIND_AOE_HEAD",
      "BIND_AOE_ARM",
      "BIND_AOE_LEG",
      "BIND_SELF_ALL",
      "AILMENT_SINGLE_BLIND",
      "AILMENT_SINGLE_PARALYZE",
      "AILMENT_SINGLE_PANIC",
      "AILMENT_SINGLE_CURSE",
      "AILMENT_SINGLE_PETRIFY",
      "AILMENT_SINGLE_POISON",
      "AILMENT_AOE_BLIND",
      "AILMENT_AOE_PARALYZE",
      "AILMENT_AOE_PANIC",
      "AILMENT_AOE_CURSE",
      "AILMENT_AOE_PETRIFY",
      "AILMENT_AOE_POISON",
      "DEBUFF_AOE_AILMENT",
      "DEBUFF_AOE_BIND",
      "BUFF_PARTY_AILMENT",
      "BUFF_PARTY_BIND"
    ],
    "healing": [
      "HEAL_SINGLE_HP",
      "HEAL_ROW_HP",
      "HEAL_PARTY_HP",
      "HEAL_SELF_HP",
      "BUFF_PARTY_HEAL",
      "HEAL_SINGLE_AILMENT",
      "HEAL_ROW_AILMENT",
      "HEAL_PARTY_AILMENT",
      "HEAL_SINGLE_BIND",
      "HEAL_ROW_BIND",
      "BUFF_ROW_AILMENT",
      "BUFF_PARTY_AILMENT",
      "HEAL_SELF_TP",
      "HEAL_SINGLE_TP",
      "HEAL_ROW_TP",
      "HEAL_PARTY_TP"
    ],
    "dps_support": [
      "BUFF_ROW_MATK",
      "BUFF_ROW_ATTACK",
      "BUFF_SELF_ATTACK",
      "BUFF_SINGLE_ATTACK",
      "BUFF_SELF_SPEED",
      "BUFF_SELF_ACCURACY",
      "BUFF_ROW_ACCURACY",
      "BUFF_AOE_ACCURACY",
      "DEBUFF_SINGLE_DEFENSE",
      "DEBUFF_ROW_DEFENSE",
      "DEBUFF_AOE_DEFENSE",
      "DEBUFF_SINGLE_EVASION",
      "DEBUFF_ROW_EVASION",
      "DEBUFF_AOE_EVASION"
    ],
    "dmg_mitigation": [
      "DEBUFF_SINGLE_ATTACK",
      "DEBUFF_ROW_ATTACK",
      "DEBUFF_AOE_ATTACK",
      "BUFF_SELF_DEFENSE",
      "BUFF_SINGLE_DEFENSE",
      "BUFF_ROW_DEFENSE",
      "BUFF_AOE_DEFENSE",
      "GUARD_SINGLE_REDIRECT",
      "GUARD_ROW_REDIRECT",
      "GUARD_PARTY_REDIRECT",
      "GUARD_ROW_GUARD",
      "GUARD_PARTY_PHYSGUARD",
      "GUARD_PARTY_ELEMGUARD",
      "BUFF_SINGLE_AGGRO"
    ],
    "negatives": [
      "EXTRA_SLOT"
    ],
    "damage_type": [],
  },
  "afterimage": {
    "id": "afterimage",
    "type": "novice",
    "name": "Afterimage",
    "negatives": [
      "EXTRA_SLOT"
    ],
  },
  "miragesword": {
    "id": "miragesword",
    "type": "novice",
    "requires": {
      "afterimage": 1
    },
    "name": "Mirage Sword",
    "negatives": [
      "EXTRA_SLOT"
    ],
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "ranged",
      "type": "cut",
    }]
  },
  "widebravery": {
    "id": "widebravery",
    "type": "novice",
    "name": "Wide Bravery",
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "melee",
      "type": "cut",
    }],
    "conditional": {
      "damage_type": [{
        "category": "physical",
        "target": "aoe",
        "range": "ranged",
        "type": "cut",
      }]
    }
  },
  "frigidslash": {
    "id": "frigidslash",
    "type": "novice",
    "name": "Frigid Slash",
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "melee",
      "type": "cut",
      "element": "ice"
    }],
    "requires": {
      "widebravery": 1
    }
  },
  "encourage": {
    "id": "encourage",
    "type": "novice",
    "name": "Encourage",
    "healing": [
      "HEAL_PARTY_HP"
    ]
  },
  "heroicbonds": {
    "id": "heroicbonds",
    "type": "novice",
    "name": "Heroic Bonds",
    "requires": {
      "encourage": 1
    },
    "conditional": {
      "dps_support": [
        "BOOST_SELF_ATTACK",
        "BOOST_SELF_SPEED"
      ]
    }
  },
  "physicalshield": {
    "id": "physicalshield",
    "type": "novice",
    "name": "Physical Shield",
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "melee",
      "type": "bash"
    }]
  },
  "clearmind": {
    "id": "clearmind",
    "type": "novice",
    "name": "Clear Mind",
    "healing": [
      "HEAL_SELF_AILMENT",
      "HEAL_SELF_BIND",
      "HEAL_SELF_TP"
    ]
  },
  "chargeimage": {
    "name": "Charge Image",
    "id": "chargeimage",
    "requires": {
      "miragesword": 2
    },
    "type": "veteran",
    "dps_support": [
      "BOOST_SELF_ATTACK"
    ]
  },
  "gracefulimage": {
    "id": "gracefulimage",
    "name": "Graceful Image",
    "requires": {
      "chargeimage": 2
    },
    "conditional": {
      "healing": [
        "HEAL_SELF_TP"
      ]
    }
  },
  "sparkblade": {
    "id": "sparkblade",
    "name": "Spark Blade",
    "requires": {
      "frigidslash": 2
    },
    "damage_type": [
      {
        "category": "physical",
        "target": "single",
        "range": "melee",
        "type": "cut"
      },
      {
        "category": "elemental",
        "target": "aoe",
        "element": "electric"
      }
    ]
  },
  "burstblade": {
    "id": "burstblade",
    "name": "Burst Blade",
    "requires": {
      "sparkblade": 2
    },
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "melee",
      "type": "cut",
    }],
  },
  "heroicsteel": {
    "id": "heroicsteel",
    "name": "Heroic Steel",
    "requires": {
      "heroicbonds": 2
    },
    "conditional": {
      "dmg_mitigation": [
        "BOOST_SELF_DEFENSE",
        "BOOST_SELF_AGGRO"
      ]
    }
  },
  "greatbravery": {
    "id": "greatbravery",
    "name": "Great Bravery",
    "requires": {
      "heroicsteel": 2
    },
    "conditional": {
      "dmg_mitigation": {

      }
    }
  },
  "elementalshield": {
    "id": "elementalshield",
    "type": "veteran",
    "name": "Elemental Shield",
    "requires": {
      "physicalshield": 2
    },
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "melee",
      "type": "bash"
    }]
  },
  "fervor": {
    "id": "fervor",
    "type": "veteran",
    "name": "Fervor",
    "requires": {
      "clearmind": 1
    }
  },
  "newchallenger": {
    "id": "newchallenger",
    "type": "veteran",
    "name": "New Challenger"
  },
  "darkimage": {
    "id": "darkimage",
    "type": "master",
    "name": "Dark Image"
  },
  "actbreaker": {
    "id": "actbreaker",
    "type": "master",
    "name": "Act Breaker",
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "melee",
      "type": "cut"
    }],
    "requires": {
      "burstblade": 3
    }
  },
  "regimentrave": {
    "id": "regimentrave",
    "type": "master",
    "name": "Regiment Rave",
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "melee",
      "type": "cut",
      "element": "fire"
    }],
    "requires": {
      "actbreaker": 3
    }
  },
  "forcegift": {
    "id": "forcegift",
    "type": "master",
    "name": "Force Gift",
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "melee",
      "type": "cut"
    }],
  },
  "retainforce": {
    "id": "retainforce",
    "type": "master",
    "name": "Retain Force",
    "requires": {
      "forcegift": 3
    }
  },
  "guardrush": {
    "id": "guardrush",
    "type": "master",
    "name": "Guard Rush",
    "requires": {
      "elementalshield": 3
    },
    "damage_type": [{
      "category": "physical",
      "target": "single",
      "range": "melee",
      "type": "bash"
    }]
  },
  "attackorder": {
    "id": "attackorder",
    "type": "novice",
    "name": "Attack Order",
    "dps_support": [
      {
        "type": "buff",
        "target": "row",
        "stat": "attack",
        "duration": {
          "min": 3,
          "max": 5
        }
      }
    ],
    "buff": [
      {
        "property": "dps_support",
        "target": 0,
      }
    ]
  },
  "guardorder": {
    "id": "guardorder",
    "type": "novice",
    "name": "Guard Order",
    "dmg_mitigation": [
      {
        "type": "buff",
        "target": "row",
        "stat": "defense",
        "duration": {
          "min": 3,
          "max": 5
        }
      }
    ],
    "buff": [
      {
        "property": "dmg_mitigation",
        "target": 0,
      }
    ]
  },
  "firearms": {
    "id": "firearms",
    "type": "novice",
    "name": "Fire Arms",
    "requires": {
      "attackorder": 1
    },
    "dps_support": [
      {
        "type": "buff",
        "target": "row",
        "stat": "attack",
        "duration": {
          "min": 3,
          "max": 5
        }
      }
    ],
    "buff": [
      {
        "property": "dps_support",
        "target": 0,
      }
    ]
  },
  "freezearms": {
    "id": "freezearms",
    "type": "novice",
    "name": "Freeze Arms",
    "requires": {
      "attackorder": 1
    },
    "dps_support": [
      {
        "type": "buff",
        "target": "row",
        "stat": "attack",
        "duration": {
          "min": 3,
          "max": 5
        }
      }
    ],
    "buff": [
      {
        "property": "dps_support",
        "target": 0,
      }
    ]
  },
  "shockarms": {
    "id": "shockarms",
    "type": "novice",
    "name": "Shock Arms",
    "requires": {
      "attackorder": 1
    },
    "dps_support": [
      {
        "type": "buff",
        "target": "row",
        "stat": "attack",
        "duration": {
          "min": 3,
          "max": 5
        }
      }
    ],
    "buff": [
      {
        "property": "dps_support",
        "target": 0,
      }
    ]
  },
  "reinforce": {
    "id": "reinforce",
    "type": "novice",
    "name": "Reinforce",
    "requires": {
      "guardorder": 2
    },
  },
  "royalveil": {
    "id": "royalveil",
    "type": "novice",
    "name": "Royal Veil",
  },
  "monarchmarch": {
    "id": "monarchmarch",
    "type": "novice",
    "name": "Monarch March",
    "requires": {
      "royalveil": 2
    }
  },
  "negotiation": {
    "id": "negotiation",
    "type": "novice",
    "name": "Negotiation"
  }
};

export default skills;