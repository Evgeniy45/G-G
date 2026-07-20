import './BandMembers.scss';
import maks from '../../assets/BandMembers/Maks.jpg';
import olena from '../../assets/BandMembers/Olena.jpg';
import taras from '../../assets/BandMembers/Taras.jpg';

const members = [
    { id: 1, name: 'Максим — гітара', image: maks },
    { id: 2, name: 'Олена — вокал', image: olena },
    { id: 3, name: 'Тарас — барабани', image: taras },
];

export const BandMembers = () => {
    return (
        <section className="members" id="members">
            <div className="members__container container">
                <h2 className="members__title">Учасники гурту</h2>

                <div className="members__grid">
                    {members.map((member) => (
                        <div className="members__card" key={member.id}>
                            <div className="members__image-wrapper">
                                <img src={member.image} alt={member.name} className="members__image" />
                            </div>
                            <p className="members__name">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};