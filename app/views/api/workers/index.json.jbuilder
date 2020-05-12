@workers.each do |worker|
    json.set! worker.id do
        json.extract! worker, :id, :first_name, :last_name, :employer, :job_title, :union, :message, :created_at, :updated_at
        # json.photoUrl url_for(worker.photo)
    end
end