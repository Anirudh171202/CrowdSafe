from matplotlib import cm as c
from PIL import Image
import io
import numpy as np


def generate_heatmap(img_rgb, index):
    fig = plt.figure(figsize=(WIDTH/DPI, HEIGHT/DPI), dpi=DPI)
    # img = transform(Image.open(img_rgb).convert('RGB')).cuda()
    img = transform(img_rgb).cuda()
    # img = transform(img_rgb)

    output = model(img.unsqueeze(0))
    print("Predicted Count : ", int(output.detach().cpu().sum().numpy()))
    temp = np.asarray(output.detach().cpu().reshape(
        output.detach().cpu().shape[2], output.detach().cpu().shape[3]))
    # np.save("../heatmap_array.np", temp)

    plt.axis('off')
    # fig.subplots_adjust(left=0, right=0)
    # ax = plt.Axes(fig, [0., 0., 1., 1.])
    # fig.add_axes(ax)
    # plt.margins(x=0)
    # plt.margins(y=0)
    # fig, ax = plt.subplots()
    # for item in [fig, ax]:
    #     item.patch.set_visible(False)

    # fig, ax = plt.subplots(facecolor='gray', frameon=False)
    # fig.tight_layout()
    plt.imshow(temp, cmap=c.jet)

    plt.savefig("../temp.png", bbox_inches="tight", pad_inches=0.0)

    return plt
    # return plt.imshow(temp,cmap = c.jet, animated=True)
    # plt.savefig("heatmap_test.png")
