# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Message.create!([
  { message: 'Hello World!' },
  { message: 'Hello World 2!' },
  { message: 'Hello World 3!' },
  { message: 'Hello World 4!' },
  { message: 'Hello World 5!' },
])