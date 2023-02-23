# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: "theodore", last_name: "garcia", email: "theodore9996@yahoo.com", password_digest: "balancedfury", username: "theodore9996")



kinesis = Job.create(job: "Kinesis", base_job: "Magician", origin: "Korea")
shade = Job.create(job: "Shade", base_job: "Pirate", origin: "N/A")
mercedes = Job.create(job: "Mercedes", base_job: "Bowman", origin: "Elluel")
evan = Job.create(job: "Evan", base_job: "Magician", origin: "Henesys")
aran = Job.create(job: "Aran", base_job: "Warrior", origin: "Rien")
phantom = Job.create(job: "Phantom", base_job: "Thief", origin: "Ariant")
illium = Job.create(job: "illium", base_job: "Magician", origin: "Sanctuary")
luminous = Job.create(job: "luminous", base_job: "Magician", origin: "Harmony")




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
    pms12 = {name: "Pensalir Mage Sallet(12)", job: "Magician"},
    pms13 = {name: "Pensalir Mage Sallet(13)", job: "Magician"},
    pms14 = {name: "Pensalir Mage Sallet(14)", job: "Magician"},
    pms15 = {name: "Pensalir Mage Sallet(15)", job: "Magician"},
    pms16 = {name: "Pensalir Mage Sallet(16)", job: "Magician"},
    pms17 = {name: "Pensalir Mage Sallet(17)", job: "Magician"},
    pms18 = {name: "Pensalir Mage Sallet(18)", job: "Magician"},
    pms19 = {name: "Pensalir Mage Sallet(19)", job: "Magician"},
    pms20 = {name: "Pensalir Mage Sallet(20)", job: "Magician"},
    pms21 = {name: "Pensalir Mage Sallet(21)", job: "Magician"},
    pms22 = {name: "Pensalir Mage Sallet(22)", job: "Magician"},
    pms23 = {name: "Pensalir Mage Sallet(23)", job: "Magician"},
    pms24 = {name: "Pensalir Mage Sallet(24)", job: "Magician"},
    pms25 = {name: "Pensalir Mage Sallet(25)", job: "Magician"},
])

Stats.create(
    {equipment_id: pms0.id, str: 0, dex: 0, int: 16, luk: 15, hp: 150, mp: 150, def: 0.05, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms1.id, str: 0, dex: 0, int: 18, luk: 17, hp: 155, mp: 150, def: 0.1, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms2.id, str: 0, dex: 0, int: 20, luk: 19, hp: 160, mp: 150, def: 0.15), spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms3.id, str: 0, dex: 0, int: 22, luk: 21, hp: 165, mp: 150, def: 0.2, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms4.id, str: 0, dex: 0, int: 24, luk: 23, hp: 175, mp: 150, def: 0.25, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms5.id, str: 0, dex: 0, int: 26, luk: 25, hp: 185, mp: 150, def: 0.3, spd: 0, jump: 0, atk: 0, matk: 0} 
    {equipment_id: pms6.id, str: 0, dex: 0, int: 29, luk: 28, hp: 200, mp: 150, def: 0.35, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms7.id, str: 0, dex: 0, int: 32, luk: 31, hp: 215, mp: 150, def: 0.4, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms8.id, str: 0, dex: 0, int: 35, luk: 34, hp: 235, mp: 150, def: 0.45, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms9.id, str: 0, dex: 0, int: 38, luk: 37, hp: 255, mp: 150, def: 0.5, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms10.id, str: 0, dex: 0, int: 41, luk: 40, hp: 280, mp: 150, def: 0.55, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms11.id, str: 0, dex: 0, int: 44, luk: 43, hp: 305, mp: 150, def: 0.6, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms12.id, str: 0, dex: 0, int: 47, luk: 46, hp: 330, mp: 150, def: 0.65, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms13.id, str: 0, dex: 0, int: 50, luk: 49, hp: 355, mp: 150, def: 0.7, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms14.id, str: 0, dex: 0, int: 53, luk: 52, hp: 380, mp: 150, def: 0.75, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms15.id, str: 0, dex: 0, int: 56, luk: 55, hp: 405, mp: 150, def: 0.8, spd: 0, jump: 0, atk: 0, matk: 0}
    {equipment_id: pms16.id, str: 0, dex: 0, int: 65, luk: 64, hp: 405, mp: 150, def: 0.85, spd: 0, jump: 0, atk: 8, matk: 8}
    {equipment_id: pms17.id, str: 0, dex: 0, int: 74, luk: 73, hp: 405, mp: 150, def: 0.9, spd: 0, jump: 0, atk: 16, matk: 16}
    {equipment_id: pms18.id, str: 0, dex: 0, int: 83, luk: 82, hp: 405, mp: 150, def: 0.95, spd: 0, jump: 0, atk: 24, matk: 24}
    {equipment_id: pms19.id, str: 0, dex: 0, int: 92, luk: 91, hp: 405, mp: 150, def: 1, spd: 0, jump: 0, atk: 35, matk: 35}
    {equipment_id: pms20.id, str: 0, dex: 0, int: 101, luk: 100, hp: 405, mp: 150, def: 1.05, spd: 0, jump: 0, atk: 47, matk: 47}
    {equipment_id: pms21.id, str: 0, dex: 0, int: 110, luk: 109, hp: 405, mp: 150, def: 1.1, spd: 0, jump: 0, atk: 60, matk: 60}
    {equipment_id: pms22.id, str: 0, dex: 0, int: 119, luk: 118, hp: 405, mp: 150, def: 1.15, spd: 0, jump: 0, atk: 75, matk: 75}
    {equipment_id: pms23.id, str: 0, dex: 0, int: 119, luk: 118, hp: 405, mp: 150, def: 1.2, spd: 0, jump: 0, atk: 92, matk: 92}
    {equipment_id: pms24.id, str: 0, dex: 0, int: 119, luk: 118, hp: 405, mp: 150, def: 1.25, spd: 0, jump: 0, atk: 111, matk: 111}
    {equipment_id: pms25.id, str: 0, dex: 0, int: 119, luk: 118, hp: 405, mp: 150, def: 1.3, spd: 0, jump: 0, atk: 132, matk: 132}
)

EquipmentReview.create(equipment_id: pms0.id, description: 'Decent gear until you get your absolab/CRA gear.')

JobReview.create(job_id: kinesis.id, description: 'Fun class to play! Good mobility! Haha rubix cubes and rubble go brrrr')