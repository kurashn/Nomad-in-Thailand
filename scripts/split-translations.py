#!/usr/bin/env python3
"""
翻訳ファイルを分割するスクリプト
messages/ja.json と messages/en.json を複数のファイルに分割します
"""

import json
import os
from pathlib import Path

def split_translations(input_file, output_dir):
    """翻訳ファイルを分割する"""
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # 出力ディレクトリを作成
    os.makedirs(output_dir, exist_ok=True)
    
    # 共通ファイルに含めるキー
    common_keys = ['Navbar', 'Hero', 'Footer', 'NomadInfo', 'Contact']
    
    #  共通ファイルを作成
    common_data = {k: data[k] for k in common_keys if k in data}
    with open(f'{output_dir}/common.json', 'w', encoding='utf-8') as f:
        json.dump(common_data, f, ensure_ascii=False, indent=4)
    print(f'Created: {output_dir}/common.json')
    
    # ホームページファイル
    if 'Home' in data:
        with open(f'{output_dir}/home.json', 'w', encoding='utf-8') as f:
            json.dump({'Home': data['Home']}, f, ensure_ascii=False, indent=4)
        print(f'Created: {output_dir}/home.json')
    
    # 各記事ファイル
    article_keys = {
        'DtvVisa': 'dtv-visa.json',
        'Sponsor': 'sponsor.json',
        'AiraloGuide': 'airalo.json',
        'SafetyWingGuide': 'safetywing.json',
        'NordVPNGuide': 'nordvpn.json',
        'WiseGuide': 'wise.json',
        'CafeGuide': 'cafe-guide.json',
        'CoworkingGuide': 'coworking-guide.json',
        'BangkokRoadmap': 'bangkok-roadmap.json',
        'TaxMoneyGuide': 'tax-money-guide.json',
        'AreaGuide': 'area-guide.json',
        'CheatSheet': 'cheat-sheet.json',
        'BangkokMap': 'bangkok-map.json'
    }
    
    for key, filename in article_keys.items():
        if key in data:
            with open(f'{output_dir}/{filename}', 'w', encoding='utf-8') as f:
                json.dump({key: data[key]}, f, ensure_ascii=False, indent=4)
            print(f'Created: {output_dir}/{filename}')

if __name__ == '__main__':
    # 日本語の分割
    split_translations('messages/ja.json', 'messages/ja')
    
    # 英語の分割
    split_translations('messages/en.json', 'messages/en')
    
    print('\n✅ 翻訳ファイルの分割が完了しました！')
