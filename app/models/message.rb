class Message < ApplicationRecord
  def self.random
    self.all().sample(1)
  end
end
