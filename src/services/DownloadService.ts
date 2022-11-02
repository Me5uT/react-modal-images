export class DownloadService {
    private static isSameOrigin = (href: string | URL): boolean => {
        const location: Location = document.location;

        const url = new URL(href, location as any);

        return location.hostname !== url.hostname;
    };

    static crossOriginDownload = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!DownloadService.isSameOrigin(href)) {
            return;
        } else {
            event.preventDefault();

            fetch(href)
                .then((res: Response) => {
                    if (!res.ok) {
                        console.error(`Failed to download image, HTTP status ${res.status} from ${href}`);
                    }

                    return res.blob().then((blob) => {
                        let tmpAnchor = document.createElement('a');
                        tmpAnchor.setAttribute('download', href.split('/').pop()!);
                        tmpAnchor.href = URL.createObjectURL(blob);
                        tmpAnchor.click();
                    });
                })
                .catch((err) => {
                    console.error(`${err}. Failed to download image from ${href}`);
                });
        }
    };
}
