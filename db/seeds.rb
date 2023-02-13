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
    {
        name: "Pensalir Mage Sallet(0)",
        job: "Magician"
            stats: [
            {
                int: "+16", 
                luk: "+15",
                hp: "+150",
                mp: "+150",
                def: "+110"
            }
        ]
    },
    {
        name: "Pensalir Mage Sallet(1)",
        class: "Magician",
            stats: [
                {
                    int: "+18",
                    luk: "+17",
                    hp: "+155",
                    mp: "+150"
                    def: "+116"
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(2)",
        class: "Magician", 
            stats: [
                {
                    int: "+20",
                    luk: "+19",
                    hp: "+160",
                    mp: "+150",
                    def: "+122"
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(3)",
        class: "Magician",
            stats: [
                {
                    int: "+22",
                    luk: "+21"
                    hp: "+165"
                    mp: "+150"
                    def: "+129"
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(4)",
        class: "Magician",
            stats: [
                {
                    int: "+24",
                    luk: "+23", 
                    hp: "+175",
                    mp: "+150",
                    def: "+136"
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(5)",
        class: "Magician",
            stats: [
                {
                    int: "+26",
                    luk: "+25",
                    hp: "+185",
                    mp: "+150",
                    def: "+143"
                }
            ]
    }, 
    {
        name: "Pensalir Mage Sallet(6)", 
        class: "Magician",
            stats: [
                {
                    int: "+29"
                    luk: "+28"
                    hp: "+200"
                    mp: "+150"
                    def: "+151"
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(7)",
        class: "Magician",
            stats: [
                {
                    int: "+32",
                    luk: "+31",
                    hp: "+215",
                    mp: "+150"
                    def: "+159"
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(8)",
        class: "Magician",
            stats: [
                {
                    int: "+35",
                    luk: "+34",
                    hp: "+235", 
                    mp: "+150",
                    def: "+167"
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(9)",
        class: "Magician",
            stats: [
                {
                    int: "+38"
                    luk: "+37"
                    hp: "+255"
                    mp: "+150"
                    def: "+176" 
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(10)",
        class: "Magician",
            stats: [
                {
                    int: "+41", 
                    luk: "+40",
                    hp: "+280",
                    mp: "+150",
                    def: "+185"
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(11)",
        class: "Magician",
            stats: [
                {
                    int: "+44",
                    luk: "+43",
                    hp: "+305", 
                    mp: "+150",
                    def: "+195"
                }
            ]
    },
    {
        name: "Pensalir Mage Sallet(12)",
        class: "Magician",
            stats: [
                {
                    int: "+47",
                    luk: "+46",
                    hp: "+330",
                    mp: "+150",
                    def: "+"
                }
            ]
    }

])