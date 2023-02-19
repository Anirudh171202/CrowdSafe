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
    plt.axis('off')
    plt.imshow(temp, cmap=c.jet)
    plt.savefig("../temp.png", bbox_inches="tight", pad_inches=0.0)
    return plt