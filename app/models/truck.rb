class Truck < ApplicationRecord
    validates :tonnage, numericality: true
    validates :crew, numericality: true
end
