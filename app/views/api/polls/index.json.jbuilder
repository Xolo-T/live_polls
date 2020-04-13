@polls.each do |poll|
    json.extract! poll, :id, :title, :author_id, :group
end
