import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
    return (
        <div>
            <div style={{ display: 'flex', paddingTop: 20 }}>
                <div style={{ flex: '100px 0 0' }}>
                    <img
                        src="/vercel.svg"
                        alt="logo"
                        style={{ dsplay: 'block', width: 200 }}
                    />
                </div>
                <Header as="h1">코딩초보</Header>
            </div>
            <Gnb />
        </div>
    );
}
