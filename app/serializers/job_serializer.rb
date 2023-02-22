class JobSerializer < ActiveModel::Serializer
  attributes :id, :job, :base_job
  has_one :job_review
end
