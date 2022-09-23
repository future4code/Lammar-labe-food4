export const getHeader = () => {
    // const token = localStorage.getItem('token')
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik0wOFFNc2E3amx2WlpUUmxtSzMxIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJjcGYiOiIxMjM2NTQ5ODciLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiY2VudHJvLCAxMjMsIGNhc2EgLSBjZW50cm8iLCJpYXQiOjE2NjM4NjM4MTR9.CmZcJkDjVM9GDHVt4f5S3tDqH8ktxLjihKRMgNb_oAE'

    const header = {
        headers: {
            auth: token
        }
    }
    return header
}