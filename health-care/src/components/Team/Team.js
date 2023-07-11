import { Card } from "./Card";

export const Team = () => {
    const doctors = [
        {
            id: 1,
            name: 'Henry Jhonson',
            imageUrl: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
            spec: 'Cardiologist',
            city: 'Sofia',
            description: 'Dr. Henry Jhonson is cardiologist with 14 years expirience. In his practice he works with over 30 patients in Healthcare Mico.'
        },
        {
            id: 2,
            name: 'Susan Miler',
            imageUrl: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
            spec: 'Surgeon',
            city: 'Stara Zagora',
            description: 'Dr. Susan Miler is surgeon with 12 years expirience. In her practice she had done miniscus treatment, heart surgeries, limb stitches, aneurysm surgery and many more.'
        },
        {
            id: 3,
            name: 'Gabriel Smith',
            imageUrl: 'https://bswh-p-001-delivery.sitecorecontenthub.cloud/api/public/content/6ddd84df68cb4fd7bd86a719cdf8c8ab?v=a682b4c0',
            spec: 'GP',
            city: 'Lovech',
            description: 'Dr. Gabriel Smith is cardiologist with 6 years expirience. In her practice she works with over 62 families in Healthcare Mico.'
        },
    ]
    return (
        <section className="team_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>Our <span>Doctors</span></h2>
                </div>
                <div className="carousel-wrap">
                    <div className="owl-carousel team_carousel owl-loaded owl-drag">

                        <div className="owl-stage-outer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {doctors.map(e => <Card key={e.id} {...e} />)}
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}