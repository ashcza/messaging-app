class MessageJob < ApplicationJob
  queue_as :default

  def perform message
    ActionCable.server.broadcast "channel_public_message", id: message.id,
      content: message.content, time: message.time, sender: message.sender
  end
end
