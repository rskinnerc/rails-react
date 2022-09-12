class Message < ApplicationRecord
  def self.random
    all.sample(1)
  end
end
