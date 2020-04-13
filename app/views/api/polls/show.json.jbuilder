json.partial! "api/polls/poll", poll: @poll

#json.set! :options do
#    json.set! :name, 'David'
#end
options_ids = []

@poll.options.each do |option|
    options_ids << option.id
end

#json.set! :options do
#    json.set! :name, options_ids
#end

json.options_ids options_ids