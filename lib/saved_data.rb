class SavedData

  def self.instance
    @instance ||= SavedData.new
    @instance
  end

  attr_accessor :temp, :powersaving, :location
  def initialize
    @temp = '20'
    @powersaving = true
    @location = 'London'
  end
end
