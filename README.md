read
code --list-extensions > extensions.list

code --list-extensions | % { "code --install-extension $_" }


tsrafce
http://mwkorea.ipdisk.co.kr:80/publist/VOL1/mwk_share/Hyundai-EVPlatform-BO/20240514-Hyundai-EVPlatform-BO.zip 





const oriData: Record<string, any>  = { ...data };

  for (const listKey in oriData.filterList) {
    oriData.filterList[listKey] = oriData.filterList[listKey].map((x: any) => {
      const newItem = [];
      for (const key in x) {
        newItem.push({ id: key, name: x[key] });
      }
      return newItem;
    });
  }

  console.log(oriData)
