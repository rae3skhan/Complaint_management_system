import React, { useState } from 'react';

const sampleComplaints = [
  {
    complaintId: '1',
    fullName: 'Syed Alam',
    complaintType: 'Technical Issue',
    status: 'Under Review',
  },
  {
    complaintId: '2',
    fullName: 'Ali Khan',
    complaintType: 'Billing Issue',
    status: 'Resolved',
  },
  {
    complaintId: '3',
    fullName: 'Lawangeen khan',
    complaintType: 'Product Defect',
    status: 'Pending',
  },
];

const ComplaintStatus = () => {
  const [complaints, setComplaints] = useState(sampleComplaints);

  return (
    <div className="complaint-status-container">
      <h2 className="text-center mb-4 py-3">Complaint Status List</h2>

      {complaints.length === 0 ? (
        <p className="text-center">No complaints found.</p>
      ) : (
        complaints.map((complaint) => (
          <div key={complaint.complaintId} className="card mb-3">
            <div className="card-header bg-success text-white">
              <h5>Complaint ID: {complaint.complaintId}</h5>
            </div>
            <div className="card-body">
              <p><strong>Full Name:</strong> {complaint.fullName}</p>
              <p><strong>Complaint Type:</strong> {complaint.complaintType}</p>
              <p>
                <strong>Status:</strong>{' '}
                <span
                  className={`badge ${
                    complaint.status === 'Resolved'
                      ? 'bg-success'
                      : complaint.status === 'Under Review'
                      ? 'bg-warning'
                      : 'bg-secondary'
                  }`}
                >
                  {complaint.status}
                </span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ComplaintStatus;
