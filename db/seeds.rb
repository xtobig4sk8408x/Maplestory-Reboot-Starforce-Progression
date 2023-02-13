# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create()

mage = Job.create(job: "Kinesis" base_job: "Magician")

Equipment.create([
    pms0 = {name: "Pensalir Mage Sallet(0)", job: "Magician"},
    pms1 = {name: "Pensalir Mage Sallet(1)", job: "Magician"},
    pms2 = {name: "Pensalir Mage Sallet(2)", job: "Magician"},
    pms3 = {name: "Pensalir Mage Sallet(3)", job: "Magician"},
    pms4 = {name: "Pensalir Mage Sallet(4)", job: "Magician"},
    pms5 = {name: "Pensalir Mage Sallet(5)", job: "Magician"}, 
    pms6 = {name: "Pensalir Mage Sallet(6)", job: "Magician"},
    pms7 = {name: "Pensalir Mage Sallet(7)", job: "Magician"},
    pms8 = {name: "Pensalir Mage Sallet(8)", job: "Magician"},
    pms9 = {name: "Pensalir Mage Sallet(9)", job: "Magician"},
    pms10 = {name: "Pensalir Mage Sallet(10)", job: "Magician"},
    pms11 = {name: "Pensalir Mage Sallet(11)", job: "Magician"},
    {
        name: "Pensalir Mage Sallet(12)",
        job: "Magician",
            stats: [
                {
                    
                }
            ]
    }

])

Stats.create(
    {equipment_id: pms0.id, str: nil, dex: nil, int: 16, luk: 15, hp: 150, mp: 150, def: (base_def + (base_def * .05)).to_f, spd: nil, jump: nil, atk: nil, matk: nil}, 
    {equipment_id: pms1.id, str: nil, dex: nil, int: 18, luk: 17, hp: 155, mp: 150, def: (base_def + (base_def * .1)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms2.id, str: nil, dex: nil, int: 20, luk: 19, hp: 160, mp: 150, def: (base_def + (base_def * .15)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms3.id, str: nil, dex: nil, int: 22, luk: 21, hp: 165, mp: 150, def: (base_def + (base_def * .2)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms4.id, str: nil, dex: nil, int: 24, luk: 23, hp: 175, mp: 150, def: (base_def + (base_def * .25)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms5.id, str: nil, dex: nil, int: 26, luk: 25, hp: 185, mp: 150, def: (base_def + (base_def * .3)).to_f, spd: nil, jump: nil, atk: nil, matk: nil}, 
    {equipment_id: pms6.id, str: nil, dex: nil, int: 29, luk: 28, hp: 200, mp: 150, def: (base_def + (base_def * .35)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms7.id, str: nil, dex: nil, int: 32, luk: 31, hp: 215, mp: 150, def: (base_def + (base_def * .4)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms8.id, str: nil, dex: nil, int: 35, luk: 34, hp: 235, mp: 150, def: (base_def + (base_def * .45)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms9.id, str: nil, dex: nil, int: 38, luk: 37, hp: 255, mp: 150, def: (base_def + (base_def * .5)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms10.id, str: nil, dex: nil, int: 41, luk: 40, hp: 280, mp: 150, def: (base_def + (base_def * .55)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms11.id, str: nil, dex: nil, int: 44, luk: 43, hp: 305, mp: 150, def: (base_def + (base_def * .6)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms12.id, str: nil, dex: nil, int: 47, luk: 46, hp: 330, mp: 150, def: (base_def + (base_def * .65)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms13.id, str: nil, dex: nil, int: 50, luk: 49, hp: 355, mp: 150, def: (base_def + (base_def * .7)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms14.id, str: nil, dex: nil, int: 53, luk: 52, hp: 380, mp: 150, def: (base_def + (base_def * .75)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms15.id, str: nil, dex: nil, int: 56, luk: 55, hp: 405, mp: 150, def: (base_def + (base_def * .8)).to_f, spd: nil, jump: nil, atk: nil, matk: nil},
    {equipment_id: pms16.id, str: nil, dex: nil, int: 65, luk: 64, hp: 405, mp: 150, def: (base_def + (base_def * .85)).to_f, spd: nil, jump: nil, atk: 8, matk: 8},
    {equipment_id: pms17.id, str: nil, dex: nil, int: 74, luk: 73, hp: 405, mp: 150, def: (base_def + (base_def * .9)).to_f, spd: nil, jump: nil, atk: 16, matk: 16},
    {equipment_id: pms18.id, str: nil, dex: nil, int: 83, luk: 82, hp: 405, mp: 150, def: (base_def + (base_def * .95)).to_f, spd: nil, jump: nil, atk: 24, matk: 24},
    {equipment_id: pms19.id, str: nil, dex: nil, int: 92, luk: 91, hp: 405, mp: 150, def: (base_def + (base_def * 1)).to_f, spd: nil, jump: nil, atk: 35, matk: 35},
    {equipment_id: pms20.id, str: nil, dex: nil, int: 101, luk: 100, hp: 405, mp: 150, def: (base_def + (base_def * 1.05)).to_f, spd: nil, jump: nil, atk: 47, matk: 47},
    {equipment_id: pms21.id, str: nil, dex: nil, int: 110, luk: 109, hp: 405, mp: 150, def: (base_def + (base_def * 1.1)).to_f, spd: nil, jump: nil, atk: 60, matk: 60},
    {equipment_id: pms22.id, str: nil, dex: nil, int: 119, luk: 118, hp: 405, mp: 150, def: (base_def + (base_def * 1.15)).to_f, spd: nil, jump: nil, atk: 75, matk: 75},
    {equipment_id: pms23.id, str: nil, dex: nil, int: 119, luk: 118, hp: 405, mp: 150, def: (base_def + (base_def * 1.2)).to_f, spd: nil, jump: nil, atk: 92, matk: 92},
    {equipment_id: pms24.id, str: nil, dex: nil, int: 119, luk: 118, hp: 405, mp: 150, def: (base_def + (base_def * 1.25)).to_f, spd: nil, jump: nil, atk: 111, matk: 111},
    {equipment_id: pms25.id, str: nil, dex: nil, int: 119, luk: 118, hp: 405, mp: 150, def: (base_def + (base_def * 1.3)).to_f, spd: nil, jump: nil, atk: 132, matk: 132},
    
)