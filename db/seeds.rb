# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(first_name: "theodore", last_name: "garcia", email: "theodore9996@aol.com", password: "balancedfury", username: "theodore9996")
u2 = User.create(first_name: "hai", last_name: "van", email: "haivan@gmail.com", password: "eskettit", username: "noodlesxP")
u3 = User.create(first_name: "Kevin", last_name: "Lien", email: "lienster@gmail.com", password: "iwanttodie", username: "swoopdewoop")
u4 = User.create(first_name: "Sochettra", last_name: "Hiep", email: "thetalkingcheese@yahoo.com", password: "idontneedlactase", username: "xchedderx")
u5 = User.create(first_name: "Joel", last_name: "Demarest", email: "joeldem1995@msn.com", password: "Waaaateerrr1!", username: "MyFirstMSN")

Equip.create([
    {name: "Pensalir Mage Sallet(0)", job: "Magician", str: 0, dex: 0, int: 16, luk: 15, hp: 150, mp: 150, def: 0.05, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030' },
    {name: "Pensalir Mage Sallet(1)", job: "Magician", str: 0, dex: 0, int: 18, luk: 17, hp: 155, mp: 150, def: 0.1, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(2)", job: "Magician", str: 0, dex: 0, int: 20, luk: 19, hp: 160, mp: 150, def: 0.15, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(3)", job: "Magician", str: 0, dex: 0, int: 22, luk: 21, hp: 165, mp: 150, def: 0.2, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(4)", job: "Magician", str: 0, dex: 0, int: 24, luk: 23, hp: 175, mp: 150, def: 0.25, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(5)", job: "Magician", str: 0, dex: 0, int: 26, luk: 25, hp: 185, mp: 150, def: 0.3, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'}, 
    {name: "Pensalir Mage Sallet(6)", job: "Magician", str: 0, dex: 0, int: 29, luk: 28, hp: 200, mp: 150, def: 0.35, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(7)", job: "Magician", str: 0, dex: 0, int: 32, luk: 31, hp: 215, mp: 150, def: 0.4, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(8)", job: "Magician", str: 0, dex: 0, int: 36, luk: 34, hp: 230, mp: 150, def: 0.5, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(9)", job: "Magician", str: 0, dex: 0, int: 38, luk: 37, hp: 255, mp: 150, def: 0.5, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(10)", job: "Magician", str: 0, dex: 0, int: 41, luk: 40, hp: 280, mp: 150, def: 0.55, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(11)", job: "Magician", str: 0, dex: 0, int: 44, luk: 43, hp: 305, mp: 150, def: 0.6, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(12)", job: "Magician", str: 0, dex: 0, int: 47, luk: 46, hp: 330, mp: 150, def: 0.65, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(13)", job: "Magician", str: 0, dex: 0, int: 50, luk: 49, hp: 355, mp: 150, def: 0.7, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(14)", job: "Magician", str: 0, dex: 0, int: 53, luk: 52, hp: 380, mp: 150, def: 0.75, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(15)", job: "Magician", str: 0, dex: 0, int: 56, luk: 55, hp: 405, mp: 150, def: 0.8, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(16)", job: "Magician", str: 0, dex: 0, int: 65, luk: 64, hp: 405, mp: 150, def: 0.85, spd: 0, jump: 0, atk: 8, matk: 8, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(17)", job: "Magician", str: 0, dex: 0, int: 74, luk: 73, hp: 405, mp: 150, def: 0.9, spd: 0, jump: 0, atk: 16, matk: 16, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(18)", job: "Magician", str: 0, dex: 0, int: 83, luk: 82, hp: 405, mp: 150, def: 0.95, spd: 0, jump: 0, atk: 24, matk: 24, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(19)", job: "Magician", str: 0, dex: 0, int: 92, luk: 91, hp: 405, mp: 150, def: 1, spd: 0, jump: 0, atk: 35, matk: 35, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(20)", job: "Magician", str: 0, dex: 0, int: 101, luk: 100, hp: 405, mp: 150, def: 1.05, spd: 0, jump: 0, atk: 47, matk: 47, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(21)", job: "Magician", str: 0, dex: 0, int: 110, luk: 109, hp: 405, mp: 150, def: 1.1, spd: 0, jump: 0, atk: 60, matk: 60, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(22)", job: "Magician", str: 0, dex: 0, int: 119, luk: 118, hp: 405, mp: 150, def: 1.15, spd: 0, jump: 0, atk: 75, matk: 75, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(23)", job: "Magician", str: 0, dex: 0, int: 128, luk: 126, hp: 405, mp: 150, def: 1.2, spd: 0, jump: 0, atk: 92, matk: 92, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(24)", job: "Magician", str: 0, dex: 0, int: 137, luk: 134, hp: 405, mp: 150, def: 1.25, spd: 0, jump: 0, atk: 111, matk: 111, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
    {name: "Pensalir Mage Sallet(25)", job: "Magician", str: 0, dex: 0, int: 1146, luk: 142, hp: 405, mp: 150, def: 1.3, spd: 0, jump: 0, atk: 132, matk: 132, image: 'https://static.wikia.nocookie.net/maplestory/images/0/07/Eqp_Pensalir_Mage_Sallet.png/revision/latest?cb=20141206040030'},
])


EquipmentReview.create(equipment_id: Equip.pluck(:id).sample, user_id: u2.id, description: 'Decent gear until you get your absolab/CRA gear.')
EquipmentReview.create(equipment_id: Equip.pluck(:id).sample, user_id: u4.id, description: "Now this is where the real damage kicks in.")
EquipmentReview.create(equipment_id: Equip.pluck(:id).sample, user_id: u3.id, description: "Congrats on getting here. Now we can look down on all the plebians.")
EquipmentReview.create(equipment_id: Equip.pluck(:id).sample, user_id: u5.id, description: "Anyone who's made it here or even attempted to make it here is a madman. You can't be satisfied with 22?")
EquipmentReview.create(equipment_id: Equip.pluck(:id).sample, user_id: u1.id, description: "25 star check? Oh wait, no one else has it. I look down on all you peasants.")

# JobReview.create(job_id: kinesis.id, description: 'Fun class to play! Good mobility! Haha rubix cubes and rubble go brrrr')

# kinesis = Job.create(job: "Kinesis", base_job: "Magician", origin: "Korea")
# shade = Job.create(job: "Shade", base_job: "Pirate", origin: "N/A")
# mercedes = Job.create(job: "Mercedes", base_job: "Bowman", origin: "Elluel")
# evan = Job.create(job: "Evan", base_job: "Magician", origin: "Henesys")
# aran = Job.create(job: "Aran", base_job: "Warrior", origin: "Rien")
# phantom = Job.create(job: "Phantom", base_job: "Thief", origin: "Ariant")
# illium = Job.create(job: "illium", base_job: "Magician", origin: "Sanctuary")
# luminous = Job.create(job: "luminous", base_job: "Magician", origin: "Harmony")
