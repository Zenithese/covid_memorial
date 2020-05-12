# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Worker.destroy_all
Mourner.destroy_all

worker1 = Worker.create!(
    first_name: "Jane",
    last_name: "Doe",
    employer: "Company XYZ",
    job_title: "Mother",
    union: "SEIU",
    message: "A mother to everyone"
    )
worker2 = Worker.create!(
    first_name: "John",
    last_name: "Doe",
    employer: "Company XYZ",
    job_title: "Essential Worker",
    union: "Teamsters",
    message: "An honest and gregarious soul, they will be truely missed"
    )
worker3 = Worker.create!(
    first_name: "Xavier",
    last_name: "Yellowhammer",
    employer: "Company XYZ",
    job_title: "Gig Economy",
    union: "Teamsters",
    message: "Pure dragon energy"
    )
worker4 = Worker.create!(
    first_name: "Sue",
    last_name: "Green",
    employer: "Plant, Animals, Humans; In That Order",
    job_title: "Planter",
    union: "AFL-CIO",
    message: "She's in our hearts"
    )
worker5 = Worker.create!(
    first_name: "Everyman",
    last_name: "Smith",
    employer: "Company Generic",
    job_title: "Handyman",
    union: "Teamsters",
    message: "He could fix it"
    )