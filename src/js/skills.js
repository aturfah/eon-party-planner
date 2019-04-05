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
        "id": "test",
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
        "name": "Afterimage",
        "negatives": [
            "EXTRA_SLOT"
        ],
    },
    "miragesword": {
        "name": "Mirage Sword",
        "negatives": [
            "EXTRA_SLOT"
        ],
        "damage_type": [
            "cut",
            "ranged"
        ]
    },
    "widebravery": {
        "name": "Wide Bravery",
        "damage_type": [
            "cut",
            "melee",
            "single"
        ],
        "conditional": {
            "damage_type": [
                "cut",
                "ranged",
                "aoe"
            ]
        }
    },
    "frigidslash": {
        "name": "Frigid Slash",
        "damage_type": [
            "ice",
            "cut",
            "melee",
            "splash"
        ]
    },
    "encourage": {
        "name": "",
        "healing": [
            "HEAL_PARTY_HP"
        ]
    },
    "heroicbonds": {
        "name": "",
        "conditional": {
            "dps_support": [
                "BOOST_SELF_ATTACK",
                "BOOST_SELF_SPEED"
            ]
        }
    },
    "physicalshield": {
        "name": "",
        "damage_type": [
            "bash",
            "melee",
            "single"
        ]
    },
    "clearmind": {
        "name": "",
        "healing": [
            "HEAL_SELF_AILMENT",
            "HEAL_SELF_BIND",
            "HEAL_SELF_TP"
        ]
    },
};

console.log(skills)