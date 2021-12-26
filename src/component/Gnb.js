import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';
export default function Gnb() {
    const router = useRouter()
    let activeItem
    if (router.pathname === "/") {
        activeItem = "home"
    } else if (router.pathname === "/about") {
        activeItem = "about"
    }

    function goLink(e, data) {
        if (data.name == 'home') {
            router.push("/")
        } else if (data.name == 'about') {
            router.push("/about") // 새로고침이 없다
            // location.href = "/about"  // 새로고침하면서 움직인다
        } else if (data.name == 'admin') {
            router.push("/abmin") // 새로고침이 없다
            // location.href = "/about"  // 새로고침하면서 움직인다
        }
    }
    return (
        <div>
            <Menu inverted>
                <Menu.Item
                    name="home"
                    active={activeItem === 'home'}
                    onClick={goLink}
                />
                <Menu.Item
                    name="about"
                    active={activeItem === 'about'}
                    onClick={goLink}
                />
                <Menu.Item
                    name="contact Us"
                    active={activeItem === 'contact'}
                    onClick={() => { router.push("/contact") }}
                />
                <Menu.Item
                    name="admin"
                    active={activeItem === 'admin'}
                    onClick={() => { router.push("/admin") }}
                />
            </Menu>
        </div>
    );
}
