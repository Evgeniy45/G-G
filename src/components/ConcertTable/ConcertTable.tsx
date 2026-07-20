import './ConcertTable.scss';

const concerts = [
    { id: 1, location: 'Київ — Docker-G Pub', seats: '250', datetime: '25.10.2026, 19:00' },
    { id: 2, location: 'Львів — !FESTrepublic', seats: '400', datetime: '01.11.2026, 20:00' },
    { id: 3, location: 'Одеса — Зелен театр', seats: '700', datetime: '09.11.2026, 19:30' },
    { id: 4, location: 'Харків — ArtZavod', seats: '500', datetime: '16.11.2026, 19:00' },
];

export const ConcertTable = () => {
    return (
        <section className="concerts" id="concerts">
            <div className="concerts__container container">
                <div className="concerts__card">
                    <h2 className="concerts__title">Найближчі концерти</h2>

                    <div className="concerts__table-wrapper">
                        <div className="concerts__header-row">
                            <span className="concerts__th">Місто / Заклад</span>
                            <span className="concerts__th">К-сть місць</span>
                            <span className="concerts__th">Дата і час</span>
                            <span className="concerts__th"></span>
                        </div>

                        <div className="concerts__list">
                            {concerts.map((concert) => (
                                <div className="concerts__row" key={concert.id}>
                                    <span className="concerts__td concerts__td--location">{concert.location}</span>
                                    <span className="concerts__td">{concert.seats}</span>
                                    <span className="concerts__td">{concert.datetime}</span>
                                    <div className="concerts__td concerts__td--action">
                                        <button className="concerts__button">Замовити квиток</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};